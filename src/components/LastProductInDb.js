import React, { Component } from 'react';
import {Link } from 'react-router-dom';
//import { Component } from 'react/cjs/react.development';

class LastProductInDb extends Component{
    constructor(props){
        super(props);
        this.state = {
            producto: "" 
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(resultado => consecuencia(resultado))
            .catch((error) => console.log('Este es el error:' + error))
    }

    componentDidMount(){
        this.apiCall("/api/products",(data)=>{
            let producto = data.data[data.data.length - 1];
            this.setState({
                producto: producto
            });
       })

    }

    render(){
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
               <div className="card-header py-3">
                   <h3 className="m-0 font-weight-bold text-gray-800">Último producto agregado:{this.state.producto.name}</h3>
               </div>
                <div className="card-body">
                   <div className="text-center">
                       <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {this.state.producto.principalImage} alt= "" />
                   </div>
                   <p>{this.state.producto.description}</p>
                   <Link className="btn btn-danger" to="/FullProductInDb">
                       <span>Más detalles</span>
                   </Link>
                   
               </div>
           </div>
       </div>  
        )
    }
}

/* let lastProduct;
    fetch("/api/products")
        .then(function (response){
            return response.json();
        }) 
        .then(function(resultado){
        lastProduct = resultado.data[resultado.data.length - 1];
        console.log(lastProduct);
        })
        .catch((error) => console.log('Este es el error:' + error));

function LastProductInDb(lastProduct){  
    const [Product,setProduct] = useState(lastProduct);
    console.log(Product);
    console.log(lastProduct);

    return(
        <React.Fragment>
         <div className="col-lg-6 mb-4">
             <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h3 className="m-0 font-weight-bold text-gray-800">Último producto agregado: {Product.name}</h3>
                </div>
                 <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {Product.principalImage} alt= "" />
                    </div>
                    <p>{Product.description}</p>
                    <Link className="btn btn-danger" to="/FullProductInDb">
                        <span>Más detalles</span>
                    </Link>
                    
                </div>
            </div>
        </div> 
        <Switch>
                <Route path="/FullProductInDb">
                    <FullProductInDb />
                </Route>
            </Switch>
        </React.Fragment>
    )
} */

export default LastProductInDb;
