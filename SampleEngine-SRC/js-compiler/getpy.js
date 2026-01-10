const { spawn } = require("child_process");
const path = require("path"); 

function GetPY(pythonFile, method, args = [], callback) {
  const pyPath = path.resolve(__dirname, pythonFile);

  const py = spawn("python3", [pyPath]);

  let buffer = "";

  py.stdout.on("data", (data) => {
    buffer += data.toString();

    let lines = buffer.split("\n");
    buffer = lines.pop(); 

    for (let line of lines) {
      if (!line.trim()) continue;
      try {
        const res = JSON.parse(line);
        callback(null, res.result); 
      } catch (err) {
        callback(`Error parsing JSON: ${err}`, null); 
      }
    }
  });

  py.stderr.on("data", (data) => {
    callback(`Python stderr: ${data.toString()}`, null); 
  });

  py.on("close", (code) => {
    if (code !== 0) {
      callback(`Python exited with code ${code}`, null); 
    }
  });

  py.stdin.write(JSON.stringify({ method, args }) + "\n");
  py.stdin.end();
}

module.exports = { GetPY };
