const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/new-contac', (req, res) =>{
    console.log(req.body);
    res.send('received')
})

module.exports = router;