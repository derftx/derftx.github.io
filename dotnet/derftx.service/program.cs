using Microsoft.AspNetCore.Diagnostics;
using Serilog;
using derftx.service;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

Logger.UseSerilog();

app.UseExceptionHandler((handler) => {
  handler.Run(async (context) => {
    var errorHandler = context.Features.Get<IExceptionHandlerPathFeature>();

    Log.Error(errorHandler?.Error.Message ?? "application error");

    await context.Response.WriteAsync("server error");
  });
});

Log.Information("program file");

app.Run(Server.Index);

app.Run();
