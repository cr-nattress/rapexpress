import eslintConfigNext from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [...eslintConfigNext, eslintConfigPrettier];

export default eslintConfig;
