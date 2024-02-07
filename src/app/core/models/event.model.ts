interface Event {
  id: number;
  title: string;
  description?: string;
  location?: string;
  beginning: string;
  end: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Event;
