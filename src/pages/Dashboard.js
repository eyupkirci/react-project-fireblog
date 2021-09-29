import React, {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard';
import { readData,updatedata } from '../helpers/firebase'
import { doc } from '@firebase/firestore';
import { async } from '@firebase/util';

export default function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {
        readData(setData);
    }, [])

    return (

       data.map((doc,key)=> {
        {console.log(doc.data())}
        return <BlogCard
                    id={doc.id}
                    like={doc.data().get_like_count}
                    comment={doc.data().get_comment_count}
                    content={doc.data().content}
                    title={doc.data().title}
                    author={doc.data().author}
                    image={doc.data().image}
                    // date={doc.data().published_date.toString()}
                    key={key}
                    />

        })

    )
}
