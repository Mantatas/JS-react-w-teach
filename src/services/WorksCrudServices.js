import firebase from "../firebase";

export const addWork = (data)=>{
    firebase.firestore()
    .collection('works')
    .add(data)
}

export const getAllWorks = (onWorksChanged, user) => {
    firebase
    .firestore()
    .collection('works')
    .where("uid","==",user?.uid)
    .onSnapshot((snapshot)=>{
        const newWork = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)

    })
}

export const getWorkById = (item, id) => {
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const deleteWork = (id) => {
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .delete()
}

export const updateWork = (id, data) => {
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .set(data)
}

export const addServices = (data) => {
    firebase
    .firestore()
    .collection('services')
    .add(data)
}

export const deleteServices = (id) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .delete()
}

export const getAllServices = (onWorksChanged) => {
    firebase
    .firestore()
    .collection('services')
    .onSnapshot((snapshot) => {
        const newWork = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)
    })
}


export const addClients = (data) => {
    firebase
    .firestore()
    .collection('clients')
    .add(data)
}

export const deleteClients = (id) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .delete()
}

export const getAllClients = (onWorksChanged) => {
    firebase
    .firestore()
    .collection('clients')
    .onSnapshot((snapshot)=>{
        const newWork = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)
})
}

export const updateClients = (id, data) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .set(data)
}

export const getClientsById = (item, id) => {
    firebase
    .firestore()
    .collection('clients')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const updateServices = (id, data) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .set(data)
}

export const getServicesById = (item, id) => {
    firebase
    .firestore()
    .collection('services')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}