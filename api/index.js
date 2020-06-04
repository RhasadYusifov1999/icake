const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require('mysql2');
const nodemailler = require('nodemailer');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Icake'
});


app.get('/get-sliders', (req, res) => {
    const sliders_query = 'SELECT * FROM sliders';
    connection.query(sliders_query, function (err, result, fields) {
        if(err)
        console.log(err);
        else
        res.status(200).json({items: result});
    });
});

app.post('/slider-save', (req, res) => {
    let data = req.body.data;
    let count = 0;
    const sliders_query = `SELECT * FROM sliders`;
    data.forEach(function(image){
        let time = new Date().getTime() * Math.floor(Math.random() * 9999);
        fs.writeFile('./assets/uploads/sliders/slider_'+time+'.jpg', image, {encoding: 'base64'}, function(err){
            count++;
            connection.query(`INSERT INTO sliders (url) VALUES ('${'slider_'+time+'.jpg'}')`, function(error, results, fields){
                if(error){
                    console.log(error);
                }
                else{
                }
            });
            if(count == data.length){
                connection.query(sliders_query, function (err, result, fields) {
                    if(err)
                    console.log(err);
                    else
                    res.status(200).json({data: result});
                });
            }
            else{}
        });
    });
});




app.post('/remove-slider', (req, res) => {
    fs.unlink('./assets/uploads/sliders/' + req.body.data.url, (err) => {
        if(err){
            console.log(err);
        }
        else{
            const removeSlider_query = `DELETE FROM sliders WHERE _id='${req.body.data._id}'`;
            connection.query(removeSlider_query, function(err, result, fields){
                if(err)
                console.log(err);
                else
                    res.status(200).json({data: 'Success'});
            });
        }
    });
});



app.get('/sliders', (req,res) => {
    const sliders_query = 'SELECT * FROM sliders';
    connection.query(sliders_query, function (err, result, fields) {
        if(err)
        console.log(err);
        else
        res.status(200).json({sliders: result});
    });
});



app.post('/create-new-our', (req, res) => {
    const our_priorities_query = `INSERT INTO our_priorities (url, title, description) VALUES ('default.png','TITLE','DESCRIPTION')`;
    const our_priorities_query_get = `SELECT * FROM our_priorities`;
    connection.query(our_priorities_query, function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            connection.query(our_priorities_query_get, function(err_two, results_two, fields_two){
                if(err_two){
                    console.log(err_two);
                }
                else{
                    res.status(200).json({
                        items: results_two
                    });
                }
            });
        }
    });
});



app.get('/get-our-item', (req, res) =>{
    const our_priorities_query_get = `SELECT * FROM our_priorities`;
    connection.query(our_priorities_query_get, function(err_two, results_two, fields_two){
        if(err_two){
            console.log(err_two);
        }
        else{
            res.status(200).json({
                items: results_two
            });
        }
    })
});



app.post('/change-our-image', (req, res) => {
    let data = req.body.data;
    let time = new Date().getTime();
    fs.writeFile('./assets/uploads/our_priorities/our_img_'+time+'.jpg', data.url[0], {encoding: 'base64'}, function(err){
        if(err){
            console.log(err);
        }
        else{
            const updateQuery =
            `UPDATE our_priorities SET url='${'our_img_'+time+'.jpg'}' WHERE _id=${data.id}`;
            connection.query(updateQuery, function(error, results, fields){
                if(error){
                    console.log(error);
                }
                else{
                    res.status(200).json({
                        item: {
                            url: 'our_img_'+time+'.jpg',
                            id: data.id,
                        }
                    });
                }
              });
        }
    });
});





app.post('/trash-out-image', (req, res) => {
    let data = req.body.data;
    const our_priorities_get = `SELECT * from our_priorities WHERE _id=${data.id}`;
    connection.query(our_priorities_get, function(err, results, fields){
        fs.unlink('./assets/uploads/our_priorities/'+results[0].url, function(err){
            if(err){
                console.log(err);
            }
            else{
                const update_our_priorities = `UPDATE our_priorities SET url='${'default.png'}' WHERE _id='${data.id}'`;
                connection.query(update_our_priorities, function(error, results, fields){
                    res.status(200).json({
                        data: 'Success'
                    });
                });
            }
        });
    });
});







app.post('/trash-our-block', (req, res) => {
        let data = req.body.data;
        const our_priorities_query = `SELECT * from our_priorities WHERE _id=${data.id}`;
        const remove_our_priorities = `DELETE FROM our_priorities WHERE _id=${data.id}`;
        connection.query(our_priorities_query, function(err, results, fields){
            if(results[0].url){

                if(results[0].url != 'default.png'){
                    fs.unlink('./assets/uploads/our_priorities/'+results[0].url, function(err){
                        if(err){
                            console.log(err);
                        }
                        else{
                            connection.query(remove_our_priorities, function(error, results_2, fields_2){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    res.status(200).json({
                                        id: data.id
                                    });
                                }
                            });
                        }
                    });
                }
                else{
                    connection.query(remove_our_priorities, function(error, results_2, fields_2){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.status(200).json({
                                id: data.id
                            });
                        }
                    });
                }
              }
            else{}
        });
});




app.post('/save-our-block', (req, res) => {
    let data = req.body.data;
    const update_our_priorities =
    `UPDATE our_priorities SET
    title='${data.title}',
    description='${data.description}' WHERE _id=${data.id}`;
    connection.query(update_our_priorities, function(err, results, fields){
        res.status(200).json({
            items:{
                title:data.title,
                description: data.description,
                id: data.id
            }
        });
    });
});



app.post('/call-me-new', (req, res) => {
    let data = req.body.data;
    const query_call_me = `INSERT INTO call_me
    (name, lastname, number, status)
    VALUES ('${data.name}', '${data.lastname}', '${data.number}', '${1}')`;

    connection.query(query_call_me, function(err, results, fields){
        if(err)
            console.log(err);
            else
            res.status(200).json({success: 'Complate'});
    });
});




app.get('/call-me-get', (req, res) => {
    const get_call_me = `SELECT * FROM call_me`;
    connection.query(get_call_me, function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                info: results.reverse()
            });
        }
    });
});




app.get('/change-all-status', (req, res)=>{
    const change_all_status_query = `UPDATE call_me SET status='0' WHERE status='1'`;
    connection.query(change_all_status_query, function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                success: "Complate"
            });
        }
    });
});



app.post('/trash-call-me', (req, res) => {
    const delete_all_status_query = `DELETE FROM call_me WHERE _id='${req.body.data}'`;
    connection.query(delete_all_status_query, function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                success:req.body.data
            });
        }
    });
});





app.post('/new-social-media', (req, res) =>{
    const query_social_media = `INSERT INTO social_media (url, img_url) VALUES ('', 'default.png')`;
    const query_social_media_get = `SELECT * FROM social_media`;
    connection.query(query_social_media, function(err, results, fields){
        if(err)
         console.log(err);
         else;
         connection.query(query_social_media_get, function(err_2, results_2, fields_2){
             if(!err_2){
                res.status(200).json({success: results_2})
             }
             else{
                 console.log(err_2);
             }
         })

    });
});



app.get('/get-social-media', (req, res) => {
    const query_social_media_get = "SELECT * FROM social_media";
    connection.query(query_social_media_get, function(err, results, fields){
        res.status(200).json({
            items: results
        });
    });
});




app.post('/change-social-img', (req, res) =>{
    let data = req.body.data;
    let time = new Date().getTime();
    const query_update = `UPDATE social_media SET img_url='${'social_media_'+time+'.jpg'}' WHERE _id=${data.id}`;
    fs.writeFile('./assets/uploads/social_media/social_media_'+time+'.jpg', data.url, {encoding: 'base64'}, function(err){
        if(err){
            console.log(err);
        }
        else{
            connection.query(query_update, function(error, results, fields){
                res.status(200).json({
                    data: 'Success'
                });
            });
        }
    });
});




app.post('/remove-social-img', (req, res) => {
    let data = req.body.data;
    const query_update = `UPDATE social_media SET img_url='${'default.png'}' WHERE _id=${data}`;
    const query_update_get = `SELECT * from social_media WHERE _id=${data}`;
    connection.query(query_update_get, function(error, results, fields){
        if(error){
            console.log(error);
        }
        else{
            fs.unlink('./assets/uploads/social_media/'+results[0].img_url, function(err){
                if(err){
                    console.log(err);
                }
                else{
                    connection.query(query_update, function(error, results, fields){
                        res.status(200).json({
                            success: "Complate"
                        });
                    });
                }
            });
        }
    });
});




app.post('/change-url-social', (req, res) => {
    let data = req.body.data;
    const query_update = `UPDATE social_media SET img_url='${data.url}' WHERE _id=${data.id}`;
    connection.query(query_update, function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                success: 'Complate'
            });
        }
    });
});










app.post('/trash-social', (req, res) => {
    let data = req.body.data;
    const query_update_get = `SELECT * from social_media WHERE _id=${data.id}`;
    const query_delete = `DELETE FROM social_media WHERE _id='${data.id}'`;
    connection.query(query_update_get, function(error, results, fields){
        if(!error){
            if(results[0].img_url != 'default.png'){
                fs.unlink('./assets/uploads/social_media/'+results[0].img_url, function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        connection.query(query_delete, function(error_, results_, fields_){
                            if(err){
                                console.log(err);
                            }
                            else{
                                res.status(200).json({
                                    success: 'Complate'
                                });
                            }
                        });
                    }
                });
            }
            else{
                connection.query(query_delete, function(error_, results_, fields_){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.status(200).json({
                            success: 'Complate'
                        });
                    }
                });
            }
        }
        else{
            console.log(err);
        }
    });
});




app.post('/create-partner', (req, res) => {
    const query_partner_get = `SELECT * FROM partners`;
    const query_partner =  `INSERT INTO partners (name, img_url) VALUES ('${''}', '${'default.png'}')`;
    connection.query(query_partner, function(error, results, fields){
        connection.query(query_partner_get, function(err, results_2, fields_2){
            if(err)
            console.log(err)
            else
            res.status(200).json({partner: results_2});
        });
    });
});



app.get('/get-partners', (req, res) => {
    const query_partner_get = `SELECT * FROM partners`;
    connection.query(query_partner_get, function(err, results_2, fields_2){
        if(err)
        console.log(err)
        else
        res.status(200).json({partners: results_2});
    });
});






app.post('/change-partner-image', (req, res) => {
    const data = req.body.data;
    let time = new Date().getTime() * Math.floor(Math.random() * 9999);
    const query_partner =  `SELECT * FROM partners WHERE _id='${data.id}'`;
    const updateQuery =
    `UPDATE partners SET img_url='${'partner_'+time+'.jpg'}' WHERE _id=${data.id}`;
    fs.writeFile('./assets/uploads/partners/partner_'+time+".jpg", data.img, {encoding: 'base64'}, function(err){
        if(err){
            console.log(err);
        }
        else{
          connection.query(query_partner, function(error, results, fields){
            if(!error){
                if(results[0].img_url == 'default.png'){
                    connection.query(updateQuery, function(err_, results_, fields_){
                        if(err_){
                            console.log(error);
                        }
                        else{
                            res.status(200).json({
                                data: 'Success'
                            });
                        }
                    });
                }
                else{
                    fs.unlink('./assets/uploads/partners/'+results[0].img_url, function(err){
                       if(!err){
                         connection.query(updateQuery, function(err_, results_, fields_){
                             if(err_){
                                 console.log(error);
                             }
                             else{
                                 res.status(200).json({
                                     data: 'Success'
                                 });
                             }
                         });
                       }
                       else{
                           console.log(err);
                       }
                    });
                }
            }
            else{
             console.log(err);
            }
          });
        }
    });
});



app.post('/remove-partner-image', (req, res) => {
    const data = req.body.data;
    const query_get_partners = `SELECT * FROM partners WHERE _id='${data}'`;
    const query_update_partners = `UPDATE partners SET img_url='${'default.png'}' WHERE _id=${data}`;
    connection.query(query_get_partners, function(err, results, fields){
      if(err){
          console.log(err);
      }
      else{
          fs.unlink('./assets/uploads/partners/'+results[0].img_url, function(err){
              if(!err){
                connection.query(query_update_partners, function(error, results, fields){
                  if(error){
                      console.log(error);
                  }
                  else{
                      res.status(200).json({
                          data: 'Success'
                      });
                  }
                })
              }
              else{
                  console.log(err);
              }
           });
      }
    });
});




app.post('/change-partner-name', (req, res) => {
    const data = req.body.data;
    const query_update_partners = `UPDATE partners SET name='${data.name}' WHERE _id=${data.id}`;
    connection.query(query_update_partners, function(error, results, fields){
      if(error){
          console.log(error);
      }
      else{
          res.status(200).json({
              data: 'Success'
          });
      }
    });
});



app.post('/delete-partner', (req, res) => {
    const data = req.body.data;
    const query_get = `SELECT * FROM partners WHERE _id='${data}'`;
    const query_delete = `DELETE FROM partners WHERE _id='${data}'`;
    connection.query(query_get, function(err, results, fields){
      if(!err){
          if(results[0].img_url != 'default.png'){
              fs.unlink('./assets/uploads/partners/'+results[0].img_url, function(err){
                  if(err){
                    console.log(err);
                  }
                  else{
                      connection.query(query_delete, function(err, results, fields){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.status(200).json({
                                delete: 'complate'
                            });
                        }
                      });
                  }
              });
          }
          else{
            connection.query(query_delete, function(err, results, fields){
              if(err){
                  console.log(err);
              }
              else{
                  res.status(200).json({
                      delete: 'complate'
                  });
              }
            });
          }
      }
      else{
          console.log(err);
      }
    });

});






app.post('/create-coupon', (req, res) => {
    const data = req.body.data;
    const all_query = `SELECT * FROM coupons`;
    const query_coupon = `INSERT INTO coupons (percent,code,status) VALUES ('${data.percent}', '${data.name}', '1')`;
    connection.query(query_coupon, function(err, results, fields){
        if(err){
          console.log(error);
        }
        else{
          connection.query(all_query, function(err_2, results_2, fields_2){
            res.status(200).json({
                coupon: results_2
            });
          });
        }
    });
});




app.get('/get-coupons', (req, res) => {
  const all_query = `SELECT * FROM coupons`;
  connection.query(all_query, function(err_2, results_2, fields_2){
    res.status(200).json({
        coupons: results_2
    });
  });
});



app.post('/change-status', (req, res) => {
    const data  = req.body.data;
    const change_query = `UPDATE coupons SET status='${data.status}' WHERE _id='${data.id}'`;
    connection.query(change_query, function(err, results, fields){
      if(err){
          console.log(err);
      }
      else{
          res.status(200).json({
              success: 'Complate!'
          });
      }
    });
});



app.post('/trash-coupon', (req, res) => {
    const data = req.body.data;
    const delete_query = `DELETE FROM coupons WHERE _id='${data}'`;
    connection.query(delete_query, function(err, results, fields){
      if(err){
          console.log(err);
      }
      else{
          res.status(200).json({
              success: 'Complate!'
          });
      }
    });
});



app.post('/send-mail', (req, res) => {
    let transfer = nodemailler.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: 'planerhobbi555@gmail.com',
            pass: 'resad1999'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mail = {
        from: 'planerhobbi555@gmail.com',
        to: 'resad1yusifov@gmail.com',
        subject: 'salam necesen',
        text: 'odwiijdiowj dwjdi jwidjwoi d'
    }
    transfer.sendMail(mail, function(error){
        if(error){
            console.log(error);
        }
        else{
            res.status(200).json({
                data: 'send mail ok'
            });
        }
    });
});



app.post('/add-category', (req,  res) => {
    const data = req.body.data;
    const add_query = `INSERT INTO categories (title) VALUES ('${data}')`;
    const get_query =  `SELECT * FROM categories`;
    connection.query(add_query, function(err, results, fields){
        if(!err){
          connection.query(get_query, function(err_2, results_2, fields_2){
              res.status(200).json({
                  category: results_2
              });
          });
        }
        else{
          console.log(error);
        }
    });
});




app.get('/get-categories', (req, res) => {
    const get_query =  `SELECT * FROM categories`;
    connection.query(get_query, function(err, results, fields){
        if(err){
          console.log(err);
        }
        else{
          res.status(200).json({
              categories: results
          });
        }
    });
});



app.post('/delete-category', (req, res) => {
    const data = req.body.data;
    const query_delete = `DELETE FROM categories WHERE _id='${data}'`;
    connection.query(query_delete, function(err, results, fields){
      if(err){
          console.log(err);
      }
      else{
          res.status(200).json({
              complate: 'Success'
          });
      }
    });
});



// let product = mangoose.model('product', {
//     composition: Array,
//     kg: Number,
//     price: Number,
//     title: String,
//     bestcake: Number,
//     producer: String,
//     images: Array
// });







app.post('/create-product', (req, res) => {
    const query_product = `
      INSERT INTO products (composition, kg, price, title,  bestcake, producer, images) VALUES
      ('','1','0','','0','','')
    `;
    connection.query(query_product, function(err, results, fields_one){
       if(!err){
            const query_last = `SELECT * FROM products WHERE _id='${results.insertId}'`;
            connection.query(query_last, function(err_2, results_2, fields){
                if(!err_2){
                    res.status(200).json({
                        product: results_2
                    });
                }
                else{}
            });
       }
       else{
         console.log(err);
       }
    });
});






app.get('/get-products', (req, res) => {
    const get_query =  `SELECT * FROM products`;
    connection.query(get_query, function(err, result, fields){
        res.status(200).json({
            products: result
        });
    });
});




app.post('/add-product-images', (req, res) => {
    const data = req.body.data;
    let names = '';
    let count = 0;
    data.images.forEach(function(image){
        let time = new Date().getTime() * Math.floor(Math.random() * 9999);
        fs.writeFile('./assets/uploads/products/product_'+time+'.jpg', image.url, {encoding: 'base64'}, function(error){
                if(error){

                }
                else{
                    count++;
                    if(count<data.images.length){
                        names+= image.id + "->"+'product_'+time+'.jpg~';
                    }
                    else{
                        names+= image.id + "->"+'product_'+time+'.jpg';
                    }
                    if(count == data.images.length){
                        const query_update = `UPDATE products SET images='${names}' WHERE _id=${data.id}`;
                        connection.query(query_update, function(error,results, fields){
                            if(error){
                                console.log(error);
                            }
                            else{
                                res.status(200).json({
                                    success: true
                                });
                            }
                        });
                    }
                   else{}
                }
        });
    })
});

// app.post('/remove-slider-product', (req, res) => {
//     const data = req.body.data;
//     product.find({_id: data.id}, function(err, docs){
//         if(err){

//         }
//         else{
//             let images = docs[0].images;
//             let index = images.findIndex(i => i.id == data.url);
//             let url = images[index].url;
//             images.splice(index, 1);
//             fs.unlink('./assets/uploads/products/'+url, function(err){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     product.updateOne({_id: data.id}, {images: images}, function(err, documents){
//                         res.status(200).json({
//                             complate: documents
//                         });
//                     });

//                 }
//             })
//         }
//     })
// });

// app.post('/change-best-cake', (req, res) => {
//     const data = req.body.data;
//     product.updateOne({_id: data.id}, {bestcake: data.status}, function(err, docs){
//         res.status(200).json({
//             success: true
//         });
//     })
// });

// app.post('/change-product-title', (req, res) => {
//     const data = req.body.data;
//     product.updateOne({_id: data.id}, {title: data.title}, function(err, docs){
//         res.status(200).json({
//             success: true
//         });
//     })
// });


// app.post('/change-product-price', (req, res) => {
//     const data = req.body.data;
//     product.updateOne({_id: data.id}, {price: data.value}, function(err, docs){
//         res.status(200).json({
//             success: true
//         });
//     })
// });

// app.post('/change-product-kg', (req, res) => {
//     const data = req.body.data;
//     product.updateOne({_id: data.id}, {kg: data.value}, function(err, docs){
//         res.status(200).json({
//             success: true
//         });
//     });
// });


// app.post('/change-product-producer', (req, res) => {
//     const data = req.body.data;
//     product.updateOne({_id: data.product_id}, {producer: data.producer_id}, function(err, docs){
//         res.status(200).json({
//             success: true
//         });
//     });
// });

// app.post('/change-product-composition', (req, res) => {
//     const data = req.body.data;
//     product.find({_id: data.parent_id}, function(err, docs){
//         let compositions = docs[0].composition;
//         if(data.checked){
//             compositions.push(data.id);
//         }
//         else{
//             let findIndexComposition = compositions.indexOf(data.id);
//             compositions.splice(findIndexComposition, 1);
//         }
//         product.updateOne({_id: data.parent_id}, {composition: compositions}, function(err, docs){
//             res.status(200).json({
//                 success: true
//             });
//         });
//     });
// });


// app.post('/remove-product', (req, res) => {
//     const data = req.body.data;
//     product.find({_id: data.id}, function(err, docs){
//         docs[0].images.forEach(element => {
//             fs.unlink('./assets/uploads/products/'+element.url, function(err){
//                 // checkpoint
//             });
//         });
//         product.deleteOne({_id: data.id}, function(err){
//             if(!err){
//                 res.status(200).json({
//                     success: true
//                 });
//             }
//             else{}
//         })
//     });
// });


module.exports = {
    handler: app,
    path: "/api"
}
