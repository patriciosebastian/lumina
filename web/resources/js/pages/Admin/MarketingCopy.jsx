import { useState } from 'react'
import { Head, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useRoute } from 'ziggy-js'
import Navbar from '@/components/navbar'

export default function MarketingCopy({ marketingCopy }) {
    const route = useRoute();
    const [editingItems, setEditingItems] = useState({});
    const [processing, setProcessing] = useState({});
    const [errors, setErrors] = useState({});

    const handleEdit = (item) => {
        setEditingItems(prev => ({
            ...prev,
            [item.id]: item.content
        }));
    };

    const handleSave = (item) => {
        const updatedContent = editingItems[item.id];

        setProcessing(prev => ({ ...prev, [item.id]: true }));

        router.put(route('admin.marketing-copy.update', item.id), {
            content: updatedContent,
        }, {
            onSuccess: () => {
                setEditingItems(prev => {
                    const newState = { ...prev };
                    delete newState[item.id];
                    return newState;
                });
                setProcessing(prev => {
                    const newState = { ...prev };
                    delete newState[item.id];
                    return newState;
                });
                setErrors(prev => {
                    const newState = { ...prev };
                    delete newState[item.id];
                    return newState;
                });
            },
            onError: (errors) => {
                console.error('Save failed:', errors);
                setErrors(prev => ({ ...prev, [item.id]: errors }));
                setProcessing(prev => {
                    const newState = { ...prev };
                    delete newState[item.id];
                    return newState;
                });
            }
        });
    };

    const handleCancel = (item) => {
        setEditingItems(prev => {
            const newState = { ...prev };
            delete newState[item.id];
            return newState;
        });
    };

    const handleInputChange = (itemId, value) => {
        setEditingItems(prev => ({
            ...prev,
            [itemId]: value
        }));
    };

    const handleBulkSave = () => {
        const updates = Object.entries(editingItems).map(([id, content]) => ({
            id: parseInt(id),
            content
        }));

        setProcessing(prev => ({ ...prev, bulk: true }));

        router.put(route('admin.marketing-copy.bulk-update'), {
            updates
        }, {
            onSuccess: () => {
                setEditingItems({});
                setProcessing(prev => {
                    const newState = { ...prev };
                    delete newState.bulk;
                    return newState;
                });
            },
            onError: (errors) => {
                console.error('Bulk save failed:', errors);
                setErrors(prev => ({ ...prev, bulk: errors }));
                setProcessing(prev => {
                    const newState = { ...prev };
                    delete newState.bulk;
                    return newState;
                });
            }
        });
    };

    const isEditing = (itemId) => {
        return editingItems.hasOwnProperty(itemId);
    };

    const hasUnsavedChanges = Object.keys(editingItems).length > 0;

    const renderField = (item) => {
        const isCurrentlyEditing = isEditing(item.id);
        const currentValue = isCurrentlyEditing ? editingItems[item.id] : item.content;

        if (item.type === 'boolean') {
            return (
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id={`item-${item.id}`}
                        checked={isCurrentlyEditing ? editingItems[item.id] === 'true' : item.content === 'true'}
                        onChange={(e) => handleInputChange(item.id, e.target.checked ? 'true' : 'false')}
                        disabled={!isCurrentlyEditing}
                        className="rounded border-gray-300"
                    />
                    <Label htmlFor={`item-${item.id}`} className="text-sm font-medium">
                        {item.content === 'true' || editingItems[item.id] === 'true' ? 'Enabled' : 'Disabled'}
                    </Label>
                </div>
            );
        }

        if (item.type === 'textarea') {
            return (
                <Textarea
                    value={currentValue}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    disabled={!isCurrentlyEditing}
                    rows={4}
                    className={`w-full ${!isCurrentlyEditing ? 'bg-gray-50' : ''}`}
                />
            );
        }

        return (
            <Input
                type="text"
                value={currentValue}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                disabled={!isCurrentlyEditing}
                className={`w-full ${!isCurrentlyEditing ? 'bg-gray-50' : ''}`}
            />
        );
    };

    const groupedItems = marketingCopy.reduce((groups, item) => {
        const section = item.key.split('_')[0];
        if (!groups[section]) {
            groups[section] = [];
        }
        groups[section].push(item);
        return groups;
    }, {});

    const getSectionTitle = (sectionKey) => {
        const titles = {
            announcement: 'Announcement Bar',
            hero: 'Hero Section',
            about: 'About Section',
            features: 'Features Section',
            feature: 'Feature Cards',
            benefits: 'Benefits Section',
            benefit: 'Benefit Cards',
            pricing: 'Pricing Section',
            mobile: 'Mobile App Section',
            verse: 'Bible Verses'
        };
        return titles[sectionKey] || sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
    };

    return (
        <>
            <Head title="Marketing Copy Management" />

            <div className="min-h-screen bg-background">
                <div className="relative grid grid-rows-[auto_1fr] h-screen min-h-svh">
                    <div className="place-items-center border-b grid grid-cols-[16px_1fr_16px] lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                        <div className="w-4 h-full border-r lg:w-full" />
                        <div className="hidden size-full border-r lg:block" />
                        <Navbar />
                        <div className="hidden size-full border-l lg:block" />
                        <div className="w-4 h-full border-l lg:w-full" />
                    </div>

                    <div className="overflow-auto">
                        <div className="container mx-auto px-4 py-8 max-w-6xl">
                            <div className="mb-8 text-center">
                                <h1 className="text-3xl font-bold text-foreground mb-2">Marketing Copy Management</h1>
                                <p className="text-muted-foreground">
                                    Manage all marketing copy displayed on the home page. Changes are reflected immediately.
                                </p>
                            </div>

                            {hasUnsavedChanges && (
                                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                            <p className="text-yellow-800">
                                                You have {Object.keys(editingItems).length} unsaved changes
                                            </p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button
                                                onClick={() => setEditingItems({})}
                                                variant="outline"
                                                size="sm"
                                                disabled={processing.bulk}
                                            >
                                                Cancel All
                                            </Button>
                                            <Button
                                                onClick={handleBulkSave}
                                                size="sm"
                                                disabled={processing.bulk}
                                            >
                                                Save All Changes
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-8">
                                {Object.entries(groupedItems).map(([sectionKey, items]) => (
                                    <Card key={sectionKey} className="w-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                {getSectionTitle(sectionKey)}
                                                <Badge variant="secondary">{items.length} fields</Badge>
                                            </CardTitle>
                                            <CardDescription>
                                                Manage copy for the {getSectionTitle(sectionKey).toLowerCase()}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            {items.map((item) => (
                                                <div key={item.id} className="space-y-3 p-4 border rounded-lg">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Label className="text-sm font-medium">
                                                                {item.name}
                                                            </Label>
                                                            <Badge variant="outline" className="text-xs">
                                                                {item.type}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            {!isEditing(item.id) ? (
                                                                <Button
                                                                    onClick={() => handleEdit(item)}
                                                                    size="sm"
                                                                    variant="outline"
                                                                >
                                                                    Edit
                                                                </Button>
                                                            ) : (
                                                                <>
                                                                    <Button
                                                                        onClick={() => handleCancel(item)}
                                                                        size="sm"
                                                                        variant="outline"
                                                                        disabled={processing[item.id]}
                                                                    >
                                                                        Cancel
                                                                    </Button>
                                                                    <Button
                                                                        onClick={() => handleSave(item)}
                                                                        size="sm"
                                                                        disabled={processing[item.id]}
                                                                    >
                                                                        {processing[item.id] ? 'Saving...' : 'Save'}
                                                                    </Button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Label htmlFor={`content-${item.id}`} className="text-xs text-muted-foreground">
                                                            Key: {item.key}
                                                        </Label>
                                                        {renderField(item)}
                                                        {errors[item.id]?.content && (
                                                            <p className="text-sm text-red-600">{errors[item.id].content}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
