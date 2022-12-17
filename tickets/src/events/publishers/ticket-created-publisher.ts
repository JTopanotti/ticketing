import { Publisher, TicketCreatedEvent, Subjects } from '@somethingorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}