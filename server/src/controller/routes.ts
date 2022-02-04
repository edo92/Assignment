import { Router } from 'express';

const router = Router();

router.get('/api/phisitians', (_, res) => {
    const dataset = [
        {
            id: 123,
            firstName: 'hibbert',
            lastName: 'julius',
            email: 'doctor@gmail.com',
        },
        {
            id: 456,
            firstName: 'krieger',
            lastName: 'Algernop',
            email: 'doctor2@gmail.com',
        },
    ];
    res.json(dataset).status(200);
});

router.get('/get/schedule/:id', (req, res) => {
    const dataset = {
        '456': [
            {
                name: 'sterlin archer',
                time: '8:00am',
                kind: 'new patient',
            },
            {
                name: 'Ray Giletter ',
                time: '10:00am',
                kind: 'Follow up',
            },
        ],
        '123': [
            {
                name: 'sterlin archer',
                time: '8:00am',
                kind: 'new patient',
            },
            {
                name: 'Ray Giletter ',
                time: '10:00am',
                kind: 'Follow up',
            },
        ],
    };
    console.log('---', dataset[req.params.id]);
    res.json(dataset[req.params.id]).status(200);
});

export default router;
