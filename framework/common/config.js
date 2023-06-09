const path = require("path");
const merge = require("deepmerge");
const fs = require("fs");
const prettier = require("prettier");

const ALLOWED_FW = ["shopify", "bigcommerce"];

function withFrameworkConfig(defaultConfig = {}) {
  const framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error("The api framework is missing");
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found. Please use one of ${ALLOWED_FW.join(
        ", "
      )}`
    );
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  );

  return config;
}

module.exports = { withFrameworkConfig };
