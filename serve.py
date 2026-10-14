"""Local test server.  Run:  python serve.py   then open http://localhost:8000"""
import http.server, socketserver

PORT = 8000  # change if the port is busy

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as server:
    print(f"Open http://localhost:{PORT}  (Ctrl+C to stop)")
    server.serve_forever()
