interface Messages {
  id: number;
  content: string;
  sentBy: 'user' | 'server';
  timestamp: Date;
}
export default Messages;
