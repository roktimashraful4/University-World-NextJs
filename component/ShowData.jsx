

import styles from '../styles/Home.module.css'

const ShowData = ({name}) => {     
        
  return (
    <>    
       
         

                {  name.map((un,index)=>{
                        return  <div key={index} className={styles.grid}>
                                <a href={un['web_pages']} target='_blank'  className={styles.card}>
                                    <h2> {un["name"]} &rarr;</h2>
                                    <p> <strong> Country :</strong>  {un["country"]}</p>
                                </a>
                                </div>
                } )}
          
             
    </>
   
  )
}

export default ShowData