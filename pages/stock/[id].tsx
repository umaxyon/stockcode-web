import { NextPage, GetStaticProps } from 'next'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { getStCode } from '../../src/graphql/queries'
import { StCode } from '../../src/API'
import awsconfig from '../../aws-exports'

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

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { id: "3635" } },
            { params: { id: "8006" } },
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<StockPageProps, {id: string}> = async ({ params }) => {

    const result = await API.graphql<any>(graphqlOperation(getStCode, { "Code": params.id }))
    const stock = result.data.getStCode as StCode
    return {
        props: {
            stock
        }
    }
}

export default StockPage