import React from 'react'

const ArticleTitle = ({ title }: { title: string }) => {
    return (
        <div className={'pl-2 border-b-2 border-b-slate-500 font-bold text-2xl text-slate-800'}>{title}</div>
    )
}

export default ArticleTitle