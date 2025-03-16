import Login from './Login.svelte';
import CardGenerator from './CardGenerator.svelte';
import JoinRoom from './JoinRoom.svelte';
import RoomLobby from './RoomLobby.svelte';
import Rules from './Rules.svelte';
import AuthGuard from './AuthGuard.svelte';
import CreateRoom from './CreateRoom.svelte';

export default {
  '/login': Login,
  '/rules': Rules,
  '/create-room': CreateRoom,
  '/join-room/:roomCode?': JoinRoom,
  '/room/:roomCode': RoomLobby,
  '/generator': CardGenerator,
  '/': AuthGuard,
};