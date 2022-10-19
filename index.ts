import { parse, Compile } from 'velocityjs'
import * as utils from './vtl-utils'

const vtlTemplate = 
`
$util.toJson($data.private)
`

const state = {
    "public": {
        "publicKey": "hfghgfjghkjhljhkjhkjhjhgdffg"
    },
    "private": {
        "secretKey": "dfgdfgdfşgmdsklfmsdşlfsmdf"
    }
}

// for now allways returns as string
export const transform = (state: any, vtlTemplate: string): string | undefined => {
    try {
        const ast = parse(vtlTemplate)

        const compiler = new Compile(ast)
        const result = compiler.render({
            util: utils.utils,
            data: state,
        })
        return result

        //@salim: THIS PART IS STILL IN PR 
        // try {
        //     return JSON.parse(result)
        // } catch (e) {
        //     return result
        // }

    } catch (e) {
        console.log('VTL Error', e)
        return undefined
    }
}


(() => {
    const transformedState = transform(state, vtlTemplate)
    console.dir(transformedState, { depth: null })
})()