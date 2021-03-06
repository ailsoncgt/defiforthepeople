import { api } from '.'
import auth from '@react-native-firebase/auth';

export const  getPinStatus = async () =>{
  tasks = null;
  token = await auth().currentUser.getIdToken()
  // const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM0ZWFhZjkxM2VlNWY0MDY0YmE2NjUzN2M0Njk3YzY5OGE3NGYwODIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWlsc29uIGRhIENydXoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9sb3ZlY3J5cHRvLXByb2QuYXBwc3BvdC5jb20vby9pbWFnZS02OTMwNjA2Zi1hNGQxLTQ4NDktODkyOS01MTQ4NmFhYzQzMjMuanBnP2FsdD1tZWRpYSZ0b2tlbj1lMmRkMjkzYy1iMjZjLTRlZTktYmE5OC1kOTM2NDBkODJhOTMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG92ZWNyeXB0by1wcm9kIiwiYXVkIjoibG92ZWNyeXB0by1wcm9kIiwiYXV0aF90aW1lIjoxNjE1MDg5NDAzLCJ1c2VyX2lkIjoidEVQdXVCazBmTVl2TnRITVRPcnlTZ1YzUGI5MiIsInN1YiI6InRFUHV1QmswZk1Zdk50SE1UT3J5U2dWM1BiOTIiLCJpYXQiOjE2MTUwODk0MDMsImV4cCI6MTYxNTA5MzAwMywiZW1haWwiOiJhaWxzb25jZ3RAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTYzMzM3OTAyMDA1MDc3NTY4NzAiXSwiZW1haWwiOlsiYWlsc29uY2d0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KvKsJ4XpkF3FK64fK4PgyL-xcvby2D16lqbi_0OhwCA4p4UklVke2qy_az6NiRP4U_Kpz9Sogd5sjFirwGWxKRl4qKZxTMvYdnLZlfOWqdfcvtISBA0u80iEQmCfHazF9qtSyAWXd3-kZPGN0fvgHzdbyTNOj8iSJBAshi1gB0VPLbI_5ds68piLIqgY1fqvpmS_wcbIN2uJByXjBX-X7Ws_cgMrZlZqPLOXEEFLrpVEynOqfOXaqt9fWeR5TsnpPQ9rEwxiGAGvyiLcnCUIx1GajDPr6oblpeVpe1aSzjHl2zkLNCcA1-zSkH2Eu8N3RTJjHqmoA6nDF4WJqG18yw'
  config = {
    headers: { Authorization: `Bearer ${token}` }
  } 
 
  return await api.get('/user/check-four-digits-password', config)
}