 //read only
  // useEffect(() => {
  //   firestore()
  //     .collection('products')
  //     .get()
  //     .then(response => {
  //       const data = response.docs.map(doc => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[]
  //       setProducts(data)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  //get only element
  // useEffect(()=>{
  //   firestore()
  //   .where('quantity', '>', 1)
  //   .limit(3)
  //   .collection('products')
  //   .doc('My-custom-id')
  //   .get()
  //   .then(response => console.log({
  //     id:response.id,
  //     ...response.data()
  //   }))
  // }, [])