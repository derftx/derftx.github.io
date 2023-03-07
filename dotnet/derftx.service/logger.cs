using Serilog;
using Serilog.Events;
using Serilog.Formatting.Json;

namespace derftx.service
{
  public static class Logger
  {
    public static void UseSerilog()
    {
      Log.Logger = new LoggerConfiguration()
        .MinimumLevel.Debug()
        .WriteTo.Console(new JsonFormatter(), LogEventLevel.Debug)
        .CreateLogger();
    }
  }
}
