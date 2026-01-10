from js_bridge import WaitJS

def carp_callback(a=0, b=0):
    print("Python tarafında callback tetiklendi")
    return a * b

ws = WaitJS()
ws.register("add", carp_callback)
ws.run()
