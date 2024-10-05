import ClassRoom from './0-classroom'; // Import the ClassRoom class

export default function initializeRooms() {
  // Create an array of ClassRoom instances with specified sizes
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
