const apiKey = "O6XBec1v7xWofYMfbg86iG3bgz9cQbxu6cexNjB4-xvgFZRr7zij9Ga7ny_5vQpspG5jM2NdQAv03mb7QnGqhyi75tgpJCKxOqOoMQDRn14mZc8eihKzRdJKmJ0mXXYx";

const Yelp = {

searchYelp(term,location,sortBy) {

    console.log("i am in yelp");
    console.log(term,location);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers: {
            Authorization: `Bearer ${apiKey}` 
          }
    }).then(response => {
    
       
       return  response.json();
    }).then(jsonResponse =>{
    
        if (jsonResponse.businesses) {
            console.log(jsonResponse.businesses[0]);
           return  jsonResponse.businesses.map((business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name : business.name,
                    address : business.location.address1,
                    city : business.location.city,
                    state : business.location.state,
                    zipCode : business.location.zipCode,
                    category : business.categories[0].title,
                    rating : business.rating,
                    reviewCount : business.review_count,

                }
            }));

        }
      })
    
    
}

};

export default Yelp;