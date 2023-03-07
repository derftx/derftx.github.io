using Serilog;

namespace derftx.service
{
  public static class Server
  {
    public static Task Index(HttpContext context)
    {
      Log.Information("index route");

      return context.Response.WriteAsJsonAsync(new { runtime = ".NET Core"});
    }
  }
}
