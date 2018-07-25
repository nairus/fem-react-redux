::
:: Launch server rendering
::
:: @author Nicolas Surian
::
@SET NODE_ENV=server
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "--trace-warnings"  "%~dp0\server.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node --trace-warnings  "%~dp0\server.js" %*
)