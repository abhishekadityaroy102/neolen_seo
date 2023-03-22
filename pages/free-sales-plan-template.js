import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'



const SalesTemplate = dynamic(() => import('./components/salesTemplate'), {

  ssr: false,

})

export default function free_sales_plan_template() {
  return (
    <>

      <SalesTemplate/>

    </>
  )
}
