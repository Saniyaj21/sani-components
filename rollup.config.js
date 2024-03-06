import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript'
import resolve from "@rollup/plugin-node-resolve";
// import postcss from 'rollup-plugin-postcss';
// import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';


export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'sani-components'
    },
    external: ["react", "react-dom"],
    plugins: [
        
       
        // css({ output: 'bundle.css' }),
        // postcss({
        //     extract: true,
        //     modules: true,
        //     use: ['sass'],
        // }),
         copy({
            targets: [{ src: 'src/styles', dest: 'dist' }],
        }),
        commonjs(),
        resolve(),
        typescript({
            tsconfig: 'tsconfig.json'
        })]
})