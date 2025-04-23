module.exports = (srv) => {
    srv.on('hello',(req,res)=>{
        if(!req.data.name){
            req.data.name = 'Kavya';
            req.data.class = 'Nursery';
        }
        return "Hey Amigo ! " + req.data.name + req.data.class;
    
    });
}
