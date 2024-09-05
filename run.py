import subprocess as sp
from colorama import init as colorama_init
from colorama import Fore
from colorama import Style

colorama_init()

# backend_p = sp.Popen(["flask", "--app", "backend/main", "run"], stdout=sp.PIPE, stderr=sp.PIPE, stdin=sp.PIPE, text=True)
# frontend_p = sp.Popen(["npm", "run", "dev"], cwd="./frontend/", shell=True, stdout=sp.PIPE, stderr=sp.PIPE, stdin=sp.PIPE, text=True)
backend_p = sp.Popen(["flask", "--app", "backend/main", "run"], stdin=sp.PIPE, text=True)
frontend_p = sp.Popen(["npm", "run", "dev"], cwd="./frontend/", shell=True, stdin=sp.PIPE, text=True)

try:
    while backend_p.poll() == None or frontend_p.poll() == None:
        # FIXME: Reading from piped stdout and stderr streams doesn't work for some reason
        #   Kinda worked with .readline() but it printed only some lines, not all
        # out, err = backend_p.stdout.read(), backend_p.stderr.read()
        # out = out.replace("\n", f"\n{Fore.GREEN}[Backend]  | {Style.RESET_ALL}")
        # err = err.replace("\n", f"\n{Fore.GREEN}[Backend]  | {Style.RESET_ALL}")
        # print(out, end='')
        # print(err, end='')
        # out, err = frontend_p.stdout.read(), frontend_p.stderr.read()
        # out = out.replace("\n", f"\n{Fore.BLUE}[Frontend] | {Style.RESET_ALL}")
        # err = err.replace("\n", f"\n{Fore.BLUE}[Frontend] | {Style.RESET_ALL}")
        # print(out, end='')
        # print(err, end='')
        pass
except KeyboardInterrupt:
    print("Exiting...")
    backend_p.kill()
    frontend_p.kill()
