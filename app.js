import express from 'express';

const app = express();

app.route('/books').get((req, res) => {
    return res.json([{
        id: 1,
        name: "Default Book"
    }]);
})


export default app;