import React, {useState} from 'react';
import SmallCard from './SmallCard';

let cartProps = [];
    fetch("/api/products")
        .then(function (response){
            return response.json();
        }) 
        .then(function(resultado){
        let productsInDB = {
            title: 'Total Productos',
            color: 'primary', 
            cuantity: resultado.count,
            icon: 'fa-clipboard-list'
        }
        let CategoriesInDb = {
            title:'Total de categorías' ,
            color:'warning',
            cuantity:resultado.countCategories,
            icon:'fa-user-check'
        }
        cartProps.push(productsInDB,CategoriesInDb);
        }) 
        .catch((error) => console.log('Este es el error:' + error));

        fetch("/api/users")
        .then(function (response){
            return response.json();
        }) 
        .then(function(resultado){
        let usersInDB = {
            title:' Total usuarios', 
            color:'success',  
            cuantity: resultado.count,
            icon:'fa-user-check'
        }
        cartProps.push(usersInDB);
        }) 
        .catch((error) => console.log('Este es el error:' + error));


function ContentRowPanels(){
    const [listProducts,setListProducts] = useState(cartProps);
    return (
    
        <div className="row">
            
            {listProducts.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowPanels;