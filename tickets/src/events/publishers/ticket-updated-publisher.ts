import { Publisher, TicketUpdatedEvent, Subjects } from '@somethingorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}