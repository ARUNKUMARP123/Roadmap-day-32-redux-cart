import { useState, useContext } from 'react';
import { UserContext } from '../utils/UserContextComponent';
import { Grid, Typography } from '@mui/material';

function CartCard() {
  let { product, setProduct } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        {product.map((e, i) => {
          const discountPrice = Math.round((e.price * e.discountPercentage) / 100);
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            setQuantity(quantity - 1);
          };

          return (
     
            <div key={i} className="col-md-12 mb-5">
              <div className="card border border-secondary" style={{padding:"50px"}}>
                <div className="row g-0">
                  <Grid container>
                    <Grid item padding={2} width={"20%"} >
                      <div className="col-md-3" style={{width:"200px"}}>
                    <img src={e.image} className="img-fluid rounded-start cardImage" alt="Loading..." />
                  </div>
                  </Grid>
                    <Grid item padding={2}  width={"70%"}   >
                    <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{e.title}</h5>
                          <h4 className="card-title">${e.price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">Brand : {e.brand}</p>
                          <p className="card-text text-success">Discount Offer : {e.discountPercentage}%</p>
                        </div>
                        <p className="card-text">{e.description}</p>
                        <p className="card-text">Rating : {e.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item   width={"10%"}  display={"flex"} alignItems={"center"} >
                    <div >
                      <Grid container  width={'100%'} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} ></Grid>
                      <Grid item  >
                      <button
                              type="button"
                              className="btn btn-outline-danger"
                              // style={{ marginRight: '8px' }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {' '}
                              -{' '}
                            </button>
                      </Grid>
                      <Grid item> <div className="quantityText">{quantity}</div></Grid>
                      <Grid item>
                      <button
                              type="button"
                              className="btn btn-outline-success"
                              // style={{ marginLeft: '8px' }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {' '}
                              +{' '}
                            </button>
                      </Grid>
                           
                           
                           
                          </div>
                    </Grid>
                  </Grid>
                  
                  <div className="col-md-9">
                    <div className="card-body px-3">
                      
                      <hr />
                      <div className="bottom" >
                        <div className="d-flex ">
                          <Grid container display={"flex"} justifyContent={"space-between"} paddingLeft={"21.5%"} >
                            <Grid item>
                              <Typography> Original Price (1 item) </Typography>
                            </Grid>
                           
                            <Grid item marginTop={-1.5}> <p className="card-text">${e.price} </p></Grid>
                          </Grid>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <Grid container display={"flex"} justifyContent={"space-between"} paddingLeft={"21.5%"} >
                            <Grid item>
                              <Typography>   Discount Amount </Typography>
                            </Grid>
                            
                            <Grid item marginTop={-1.5}> <p className="card-text text-success"> - ${discountPrice}</p></Grid>
                          </Grid>
                          
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <Grid container display={"flex"} justifyContent={"space-between"}  paddingLeft={"21.5%"}>
                            <Grid item>
                              <Typography>Final Price (Price - Discount) </Typography>
                            </Grid>
                            
                            <Grid item marginTop={-1.5}> <p className="card-text">${e.price - discountPrice}</p></Grid>
                          </Grid>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <Grid container display={"flex"} justifyContent={"space-between"} paddingLeft={"21.5%"}  >
                            <Grid item>
                              <Typography>Total Amount (Final price * Quantity) </Typography>
                            </Grid>
                            
                            <Grid item marginTop={-2.1}> <h5 className="card-text">${e.price * quantity}</h5></Grid>
                          </Grid>
                        </div>
                      </div><Grid container display={'flex'} justifyContent={"flex-end"}>
                        <Grid item> 
                        <button type="button" className="btn btn-primary float-end my-3">
                        Proceed to pay
                      </button>
                        </Grid>
                      </Grid>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartCard;