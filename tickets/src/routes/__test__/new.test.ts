import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it('has a route handler listening to /api/tickets for POST reqs', async () => {
    const resp = await request(app).post('/api/tickets').send({});
    expect(resp.status).not.toEqual(404);
});

it('can only be accesses by authenticated used', async () => {
    const resp = await request(app).post('/api/tickets').send({}).expect(401);
});

it('returns other than 401 for authed', async () => {
    const resp = await request(app)
    .post('/api/tickets')
    .set("Cookie", global.signin())
    .send({});

    expect(resp.status).not.toEqual(401);
});

it('returns an error if invalid title is provided', async () => {
    const resp = await request(app)
    .post('/api/tickets')
    .set("Cookie", global.signin())
    .send({
        title: null,
        price: 20
    })

    expect(resp.status).toEqual(400);
});

it('returns an error if invalid price is provided', async () => {
    const resp = await request(app)
    .post('/api/tickets')
    .set("Cookie", global.signin())
    .send({
        title: "sdfa",
        price: ""
    })

    expect(resp.status).toEqual(400);
});

it('creates a ticket with valid inputs', async () => {
    let tickets = await Ticket.find({});
    expect(tickets.length).toEqual(0);


    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: "gawega",
            price: 20
        })
        .expect(201);

    tickets = await Ticket.find({});
    expect(tickets.length).toEqual(1);
});