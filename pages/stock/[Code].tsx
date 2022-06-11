import { NextPage, GetStaticProps } from 'next'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { getStCode, listCodes } from '../../src/graphql/queries'
import { GetStCodeQuery, ListStCodesQuery, StCode } from '../../src/API'
import awsconfig from '../../aws-exports'
import { GraphQLResult } from '@aws-amplify/api-graphql';

Amplify.configure({
    ...awsconfig,
    aws_appsync_authenticationType: "API_KEY"
})

type StockPageProps = {
    stock: StCode
}

const StockPage: NextPage<StockPageProps> = ({ stock }) => {
    console.log(`stock: ${stock.Code}`)
    return (
        <>
            <div>aaa</div>
            <div>{stock.Code}</div>
        </>
    )
}

export const getStaticPaths = async () => {

    let items = []
    let nextToken = null
    while (true) {
        const ret = await API.graphql(graphqlOperation(listCodes, { limit: 2000, nextToken })) as GraphQLResult<ListStCodesQuery>

        items = [...items, ...ret.data.listStCodes.items]
        if (!ret.data.listStCodes.nextToken) {
            break
        }
        nextToken = ret.data.listStCodes.nextToken
    }

    return {
        paths: items.map((r: any) => { return { params: { Code: r.Code } } }),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<StockPageProps, {Code: string}> = async ({ params }) => {

    const result = await API.graphql(graphqlOperation(getStCode, { "Code": params.Code })) as GraphQLResult<GetStCodeQuery>
    return {
        props: {
            stock: result.data.getStCode
        }
    }
}

export default StockPage