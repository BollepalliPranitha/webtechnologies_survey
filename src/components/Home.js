import React from "react";

function Home() {
  return (
    <section id="home">
      <h1>A Survey on Transport Protocols for Web Streaming</h1>
      <p>There are several issues facing the field of transport protocols for web streaming, and these are mainly on latency, congestion control, and reliability. 
        Although protocols like the TCP have been a standard for Web streaming over a number of years, they are unsuitable to handle the current needs of Web streaming technology, especially for real time applications like, video conferencing, live streaming, and gaming. The workload is again a critical task, since higher latencies are disastrous to the ability to interact in these kinds of environments. Furthermore, congestion control is crucial to provide an equitable bandwidth allocation by preventing multiple working protocols such as HTTP/2 and QUIC that run simultaneously. 
        Maintaining stream reliability, in particular, becomes challenging with packet losses and varying channel bandwidth rate in delivery and reception.
      </p>
      <br></br>
      <p>Over the last several decades, much research effort has been devoted to solving these challenges by introducing various transport protocols, such as QUIC, HTTP/2, and WebRTC. 
        Transitioning from TCP, which uses CLE, to QUIC has become strong since it helps to cut down the connection setup time and also to experience low latencies more than real time. 
        HTTP/2 also increases the efficiency of content transmission by stream multiplexing as well as header information compression than coming with HTTP/1.1. 
        The integration of WebRTC has been most beneficial for peer to peer communication where video streaming is required and also the QUIC improves the site’s reliability in cases of poor connectivity to network. 
        Further, there has been a rising trend to incorporate a machine learning technique in order to make dynamic adaptations to the upper-layer transport protocols depending on the available network conditions.
      </p>
      <br></br>
      <p>
      Investment in this area for future research should be directed at enhancing the performance and dependability of the transport protocols on layered models. 
      There are bandwidth and connection stability boosting possibilities such as multipath communication where data can travel across several independent paths. 
      Drawing on this interest are also various patterns concerning machine learning-based optimizations, which are aimed at foreseeing current conditions needed for the network and adjusting the streaming parameters to provide high QoS. 
      Since the quality, low latency, reliable streaming is something that is increasingly being needed, research on reducing the latency, making the congestion control efficient and improving reliability in more complex and dynamic network environments will continue.
      </p>
    </section>
  );
}

export default Home;
