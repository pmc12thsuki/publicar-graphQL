import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getRandomNewsQuery = gql `
{
  getRandomNews {
    title
    description
    source
    url
  }
}
`
const NewsList = () => (
  <Query query = {getRandomNewsQuery} > 
  {({ loading, error, data }) => {
    if (loading) return ''
    console.log(data)
      const news = data.getRandomNews;
      return (
        <a href={news.url} style={{ color: '#000' }}>
          <div className="card darken-1">
              <div className="card-content grey lighten-4">
                <span className="card-title">廣告</span>
                <span className="card-title">{ news.title }</span>
                <p className="right">來源： { news.source }</p>
                <p>{news.description}</p>
              </div>
            <div className="card-action grey lighten-4">
                <a href={news.url}>看更多...</a>
            </div>
          </div>
        </a>
      )
    }} 
  </Query>
);

export default NewsList;