import React from "react";

function Home() {
  return (
    <section id="home">
      <h1>A Survey on Transport Protocols for Web Streaming</h1>
      <p>Transport protocols for delivering web-based streaming include HTTP/2, QUIC, and WebRTC, all of which are important to assure quality streaming for live events, meetings, and games. 
        The main difficulties are latency control, network load regulation, extensibility, dependability, and safety. 
      </p>

      <p>These problems are resolved by the latest developments in the field of QUIC in HTTP/3, which speeds up connection establishment and addresses the problem of packet loss. 
        Some of these techniques include, multiplexing and header compression for HTTP/2 while Web real time communication or WebRTC facilitates low latency peer to peer communication using UDP. 
      </p>
    </section>
  );
}

export default Home;
