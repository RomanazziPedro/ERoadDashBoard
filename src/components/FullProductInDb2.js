import React, {useState} from 'react';

let lastProduct;
let idProduct;
let precio;
    fetch("/api/products")
        .then(function (response){
            return response.json();
        }) 
        .then(function(resultado){
        lastProduct = resultado.data[resultado.data.length - 1];
        idProduct = lastProduct.id;
        })
        .catch((error) => console.log('Este es el error:' + error));

function FullProductInDb(){  
    const [LastProduct,setProduct] = useState(lastProduct);
        fetch("/api/products/"+idProduct)
            .then(function (response){
            return response.json();
            }) 
            .then(function(resultado){
                precio =resultado.product.price;

                })
            .catch((error) => console.log('Este es el error:' + error));
            console.log(precio);
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h3 className="m-0 font-weight-bold text-gray-800 text-center"> {LastProduct.name}</h3>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a" style={{width: 40 +'rem'}} src= {LastProduct.principalImage} alt= "" />
                    </div>
                    <p>{LastProduct.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FullProductInDb;
