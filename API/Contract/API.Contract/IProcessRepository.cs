﻿using API.Domain.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace API.Contract
{
    public interface IProcessRepository
    {
        Task<Process> AddAsync(Process process, CancellationToken cancellationToken);
    }
}