<?php

namespace App\Http\Controllers;

use App\Models\MarketingCopy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class MarketingCopyController extends Controller
{

    public function index()
    {
        Gate::authorize('manageMarketingCopy');

        $marketingCopy = MarketingCopy::orderBy('key')->get();

        return Inertia::render('Admin/MarketingCopy', [
            'marketingCopy' => $marketingCopy,
        ]);
    }

    public function update(Request $request, MarketingCopy $marketingCopy)
    {
        Gate::authorize('manageMarketingCopy');

        $request->validate([
            'content' => 'required|string',
        ]);

        $marketingCopy->update([
            'content' => $request->input('content'),
        ]);

        return back()->with('success', 'Marketing copy updated successfully.');
    }

    public function bulkUpdate(Request $request)
    {
        Gate::authorize('manageMarketingCopy');

        $request->validate([
            'updates' => 'required|array',
            'updates.*.id' => 'required|exists:marketing_copy,id',
            'updates.*.content' => 'required|string',
        ]);

        foreach ($request->input('updates') as $update) {
            MarketingCopy::where('id', $update['id'])->update([
                'content' => $update['content'],
            ]);
        }

        return back()->with('success', 'Marketing copy updated successfully.');
    }
}
