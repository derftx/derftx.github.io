using Serilog;
using Xunit;

namespace derftx.service.test
{
  public class TestLogger
  {
    [Fact]
    public void Test_Logger()
    {
      Logger.UseSerilog();

      Assert.NotNull(Log.Logger);
    }
  }
}
