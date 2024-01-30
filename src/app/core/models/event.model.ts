interface Event {
  id: number;
  title: string;
  description?: string;
  location?: string;
  beginning: Date;
  end: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Event;
