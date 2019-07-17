const apiKey = "YELP API KEY";

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
