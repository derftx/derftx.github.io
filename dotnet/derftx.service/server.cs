namespace derftx.service
{
  public static class Server
  {
    public static Task Root(HttpContext context)
    {
      return context.Response.WriteAsJsonAsync(new { runtime = ".NET Core"});
    }
  }
}
