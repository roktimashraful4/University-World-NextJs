import Head from 'next/head'

import { useState } from 'react';
import ShowData from '../component/ShowData';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name, setname] = useState('')
 const [data, setdata] = useState([])
  const handelchange= (event)=>{
    setname(event.target.value);
    getData(name)
} 
    const getData = async(name)=>{
        const res =  await fetch(`https://universities.hipolabs.com/search?name=${name}`);
         const  data1  =await res.json()
        setdata(data1);
       
        }
   

  return (
    <div className={styles.container}>
      <Head>
        <title>University World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        University <span className='colr'>Name !</span> 
        </h1>

        
            <form className={styles.description} autoComplete="off" >
                  <input className='nameInput' placeholder='Serch by naem' type="text" value={name} onChange={handelchange} id="name" />
                 
            </form>
        {
          
        }
           
       <ShowData name={data} /> 
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           roktim ashraful
          </span>
        </a>
      </footer>
    </div>
  )
}
