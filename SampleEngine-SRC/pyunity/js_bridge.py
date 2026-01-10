import sys
import json

class WaitJS:
    def __init__(self):
        self.methods = {}  

    def register(self, method_name, callback):
        self.methods[method_name] = callback

    def run(self):
        for line in sys.stdin:
            line = line.strip()
            if not line:
                continue
            try:
                data = json.loads(line)
                method_name = data.get("method")
                args = data.get("args", [])

                callback = self.methods.get(method_name)
                if callback:
                    result = callback(*args)

                    print(json.dumps({"result": result}))
                    sys.stdout.flush()
                else:
                    print(json.dumps({"error": f"Bilinmeyen method: {method_name}"}))
                    sys.stdout.flush()
            except Exception as e:
                print(json.dumps({"error": str(e)}))
                sys.stdout.flush()
