import React from "react";

function Content() {
  return (
    <section id="content">
      <h2>Survey Content</h2>
      <p>
      Modern transport protocols are discussed in the reviewed papers, including QUIC, HTTP/2 and WebRTC, and they all concern fundamental issues of web streaming regarding latency, congestion control as well as reliability. 
      Such protocols have progressed from being TCP-based transport layers, with options like QUIC and WebRTC now existing for real-time use and low latency. 
      For instance, UDP and stream multiplexing facilitate faster connection setups and better congestion in interactive and high congestion settings for QUIC; 
      On the other hand, HTTP/2 improves content delivery through stream multiplexing and header compression. But their key differences are that HTTP/2 now depends on TCP, which is less efficient in low latency with parallel QUIC.
      </p>
      <br></br>
      <p>
      The findings of the study demonstrate that each of the given protocols has its strength andweaknesses. 
      While QUIC shows better results in spontaneity and lack of packet transmission reliability, HTTP/2 shows better results at higher bandwidth and less latency but, when integrated with WebRTC, QUIC outperforms HTTP/2. QUIC in WebRTC enhances the true real-time communication experience, and it has the possibility for P2P and Video conferencing. 
      In addition, several future studies include multipath communication and the utilization of machine learning for optimization to support the strict reliability and scalability requirements of these protocols. 
      These development are necessary in order to enhance the Quality of Service (QoS) in web streaming applications, particularly in unpredictable and complex network conditions
      </p>
    </section>
  );
}

export default Content;
