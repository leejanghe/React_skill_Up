import React from 'react'

function DataForm({data}) {
    console.log('data',data)
    return (
                <div>
                    {data.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>
                        </div>               
                    ))}    
                </div>
    )
}

export default DataForm
